"use server"

export const getDailyUnitPrice = async () => {
try {
    const res = await fetch(
      "https://online.npfpensions.com.ng/NPFWebAPI/api/AccountsTrans/GetPriceSummary",
      { next: {  revalidate: 60 * 60 * 24 } }
    )
    const data = await res.json()

    if (!Array.isArray(data) || data.length === 0) return null

    const today = data[0]
    const yesterday = data[1] || null

    return { today, yesterday }
  } catch (error) {
    console.error("Error fetching unit prices:", error)
    return null
  }
};
