"use client";

import { useRouter, useSearchParams } from "next/navigation";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export interface GalleryFilterProps {
    events: string[];
    categories: string[];
    years: string[];

    selectedEvent: string;
    selectedCategory: string;
    selectedYear: string;
}


export default function GalleryFilter({
    events,
    categories,
    years,
    selectedEvent,
    selectedCategory,
    selectedYear,
}: GalleryFilterProps) {

    const router = useRouter();
    const searchParams = useSearchParams();

    const updateFilter = (
        key: string,
        value: string
    ) => {
        const params = new URLSearchParams(
            searchParams.toString()
        );

        params.set(key, value);

        router.replace(
            `/gallery?${params.toString()}#gallery-section`
        );
    };

    return (
        <div className="flex flex-wrap justify-center items-center gap-4 border rounded-lg p-3">
            <h4>FILTERS:</h4>
            {/* Event */}
            <Select
                value={selectedEvent}
                onValueChange={(value) =>
                    updateFilter("event", value)
                }>
                <SelectTrigger>
                    <SelectValue placeholder="Select Event" />
                </SelectTrigger>

                <SelectContent>
                    {events.map((item) => (
                        <SelectItem key={item} value={item}>
                            {item}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {/* Category */}
            <Select
                value={selectedCategory}
                onValueChange={(value) =>
                    updateFilter("category", value)
                }
            >
                <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                </SelectTrigger>

                <SelectContent>
                    {categories.map((item) => (
                        <SelectItem key={item} value={item}>
                            {item}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            {/* Year */}
            <Select value={selectedYear}
                onValueChange={(value) =>
                    updateFilter("year", value)
                }>
                <SelectTrigger>
                    <SelectValue placeholder="Select Year" />
                </SelectTrigger>

                <SelectContent>
                    {years.map((item) => (
                        <SelectItem key={item} value={item}>
                            {item}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
