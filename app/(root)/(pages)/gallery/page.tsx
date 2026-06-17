
import GalleryFilter from '@/components/GalleryFilter';
import GalleryGrid, { GalleryItem } from '@/components/GalleryGrid'
import PaginationComponent from '@/components/PaginationComponent';
import { galleryQuery } from '@/lib/queries';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

// export const galleryItems = [
//     {
//         id: 1,
//         title: "Annual Security Summit",
//         image:
//             "https://images.unsplash.com/photo-1511578314322-379afb476865",
//         event: "Security Summit",
//         category: "Conference",
//         year: "2025",
//     },

//     {
//         id: 2,
//         title: "Community Outreach",
//         image:
//             "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
//         event: "Outreach",
//         category: "Community",
//         year: "2025",
//     },

//     {
//         id: 3,
//         title: "Police Parade",
//         image:
//             "https://images.unsplash.com/photo-1517457373958-b7bdd4587205",
//         event: "Parade",
//         category: "Ceremony",
//         year: "2024",
//     },

//     {
//         id: 4,
//         title: "Training Exercise",
//         image:
//             "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
//         event: "Training",
//         category: "Workshop",
//         year: "2024",
//     },

//     {
//         id: 5,
//         title: "National Event",
//         image:
//             "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
//         event: "National Event",
//         category: "Conference",
//         year: "2025",
//     },

//     {
//         id: 6,
//         title: "Award Ceremony",
//         image:
//             "https://images.unsplash.com/photo-1515169067868-5387ec356754",
//         event: "Awards",
//         category: "Ceremony",
//         year: "2025",
//     },
// ];

const PAGE_SIZE = 8;

const Gallery = async ({ searchParams }: {
    searchParams: Promise<{
        event?: string;
        category?: string;
        year?: string;
        page?: string;
    }>;
}) => {

    const params = await searchParams;
    const currentPage = Number(params?.page ?? 1);
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const { data, total } = await client.fetch<{ data: GalleryItem[]; total: number }>(galleryQuery, { start, end });
    const totalPages = Math.ceil(total / PAGE_SIZE);

    const galleryItems: GalleryItem[] = data.map((item: any) => ({
        id: item._id,
        title: item.title ?? "Untitled",
        event: item.event ?? "Unknown",
        category: item.category ?? "Unknown",

        year: item.date
            ? new Date(item.date).getFullYear().toString()
            : "Unknown",

        gridImage: item.images?.[0]
            ? urlFor(item.images[0])
                .width(800)
                .quality(85)
                .auto("format")
                .url()
            : "/placeholder.jpg",

        fullImage: item.images?.[0]
            ? urlFor(item.images[0])
                .width(2000)
                .quality(95)
                .auto("format")
                .fit("max")
                .url()
            : "/placeholder.jpg",
    }));

    const event = params.event ?? "All";
    const category = params.category ?? "All";
    const year = params.year ?? "All";

    const filtered = galleryItems.filter((item) => {
        return (
            (event === "All" || item.event === event) &&
            (category === "All" || item.category === category) &&
            (year === "All" || item.year === year)
        );
    });

    const events: string[] = [
        "All",
        ...Array.from(
            new Set(galleryItems.map((item) => item.event ?? "Unknown"))
        ),
    ];

    const categories: string[] = [
        "All",
        ...Array.from(
            new Set(galleryItems.map((item) => item.category ?? "Unknown"))
        ),
    ];

    const years: string[] = [
        "All",
        ...Array.from(
            new Set(galleryItems.map((item) => item.year ?? "Unknown"))
        ),
    ];


    return (
        <section className="w-full">
            <div className="relative h-[50vh] md:h-[443px] flex flex-col items-center justify-center p-8 gap-12.5 sm:p-25 bg-[url('/images/benefits-withdrawal-bg.jpg')] bg-cover bg-center overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" aria-hidden="true" />
                <div aria-hidden="true" className="ellipse-top" />
                <div aria-hidden="true" className="ellipse-bottom" />

                <div className="absolute z-10 flex flex-col items-center gap-7.5 text-center p-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-white">Gallery</h1>
                    <p className="text-base md:text-lg font-medium text-white text-center">A curated collection of moments captured across our events, engagements, and milestones. <br/> Explore visual highlights that reflect our commitment, impact, and the people behind our work.</p>
                </div>
            </div>

            <div id="gallery-section" className="flex justify-center items-center bg-white-100 pt-20">
                <GalleryFilter
                    events={events}
                    categories={categories}
                    years={years}
                    selectedEvent={event}
                    selectedCategory={category}
                    selectedYear={year}
                />
            </div>

            <div className="flex flex-col bg-white-100 p-12 gap-12.5 sm:p-25">
                <div className="flex flex-wrap items-start justify-center gap-7.5">
                    {filtered.length > 0 ? (
                        <GalleryGrid images={filtered} />
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="text-5xl mb-4">📷</div>

                            <h2 className="text-2xl font-semibold">
                                No Photos Available
                            </h2>

                            <p className="text-muted-foreground mt-2 max-w-md">
                                There are currently no images for the selected filters. Please check another event or category.
                            </p>

                            <Link
                                href="/gallery#gallery-section"
                                className="mt-6 px-4 py-2 rounded-lg bg-black text-white"
                            >
                                Reset Filters
                            </Link>
                        </div>
                    )}

                    {totalPages > 1 && (
                        <PaginationComponent
                            currentPage={currentPage}
                            totalPages={totalPages}
                        />
                    )}
                </div>


            </div>

            <div className="flex flex-col items-center justify-center bg-white p-8 gap-12.5 sm:p-25">
                <div className="flex flex-col items-center justify-center gap-7.5 md:w-[500px]">
                    <h1 className="section-header">Need Assistance?</h1>
                    <p className="text-base font-normal text-grey-100 text-center">Our dedicated customer service team is here to help you navigate your benefit options and ensure you get the support you need.</p>

                    <div className="flex flex-col md:flex-row gap-5">
                        <Link href="/faqs" className="w-29 h-15 bg-blue-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-blue-100 text-white mx-auto rounded-md flex items-center justify-center">
                            View FAQs
                        </Link>

                        <Link href="/contact" className="w-50 h-15 bg-white-100 hover:bg-yellow-100 text-base font-semibold border hover:border-none border-gray-100 text-blue-100 hover:text-white mx-auto rounded-md flex items-center justify-center">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery