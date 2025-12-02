import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { fundPriceQuery } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { Fund } from "@/sanity/types";

const FundPriceTable = async () => {
    const fundPrice = await client.fetch(fundPriceQuery);

  return (
    <Table className="bg-white-100">
      <TableHeader className="bg-yellow-100">
        <TableRow>
          <TableHead className="w-[200px] font-bold">DATE</TableHead>
          <TableHead className="text-right font-bold">FUND I</TableHead>
          <TableHead className="text-right font-bold">FUND II</TableHead>
          <TableHead className="text-right font-bold">FUND III</TableHead>
          <TableHead className="text-right font-bold">FUND IV</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {fundPrice.map((data:Fund) => (
          <TableRow key={data._id}>
            <TableCell className="font-semibold uppercase text-base">{data.date}</TableCell>
            <TableCell className="text-right text-grey-100 text-base">{data.fund1}</TableCell>
            <TableCell className="text-right text-grey-100 text-base">{data.fund2}</TableCell>
            <TableCell className="text-right text-grey-100 text-base">{data.fund3}</TableCell>
            <TableCell className="text-right text-grey-100 text-base">{data.fund4}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default FundPriceTable
