import React from 'react';

const ChartTable = ({ headers, rows }) => (
  <div className="mb-[12px]">
    <div className="text-center bg-[linear-gradient(90deg,#900C3F,#581845)] text-white p-[8px] rounded-[3px] uppercase mt-[8px] mb-[4px]">
      <h2 className="text-[14px] m-0 font-bold">MONTHLY SATTA RECORD CHART June 2026</h2>
    </div>
    <table className="w-full border-collapse bg-white text-black table-fixed">
      <thead>
        <tr>
          <th className="bg-[#f8f8f8] text-[#cc0000] text-[8px] w-[18%] font-bold border border-[#ccc] p-[5px_1px]">DATE</th>
          {headers.map((h, i) => (
            <th key={i} className="bg-[#900C3F] text-white p-[5px_1px] text-[8px] uppercase border border-[#ccc] break-words leading-[1.1] w-[13.6%]">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            <td className="bg-[#f8f8f8] text-[#cc0000] text-[8px] w-[18%] font-bold border border-[#ccc] text-center p-[5px_0]">{row.date}</td>
            {row.data.map((d, j) => (
              <td key={j} className="border border-[#ccc] text-center p-[5px_0] font-bold text-[12px] max-[360px]:text-[11px]">{d}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const MonthlyRecordChart = () => {
  const table1Headers = ["DESAWAR", "DELHI BAZAR", "SHREE GANESH", "FARIDABAD", "GHAZIABAD", "GALI"];
  const table1Rows = [
    { date: "01-06-2026", data: ["--", "69", "22", "03", "52", "53"] },
    { date: "02-06-2026", data: ["11", "54", "03", "51", "29", "50"] },
    { date: "03-06-2026", data: ["48", "62", "88", "65", "85", "02"] },
    { date: "04-06-2026", data: ["47", "15", "16", "04", "78", "16"] },
    { date: "05-06-2026", data: ["78", "90", "90", "72", "72", "16"] },
    { date: "06-06-2026", data: ["10", "12", "05", "32", "66", "55"] },
    { date: "07-06-2026", data: ["28", "35", "37", "88", "32", "78"] },
    { date: "08-06-2026", data: ["62", "32", "60", "39", "70", "66"] },
    { date: "09-06-2026", data: ["26", "58", "01", "35", "21", "00"] },
    { date: "10-06-2026", data: ["65", "93", "48", "85", "33", "31"] },
    { date: "11-06-2026", data: ["31", "--", "--", "--", "--", "--"] },
  ];

  const table2Headers = ["JAIPUR DAY", "PUNJAB MAIL", "SHREE SAI", "SIKANDRABAD", "GALI DISAWAR MIX"];
  const table2Rows = [
    { date: "01-06-2026", data: ["31", "32", "04", "41", "39"] },
    { date: "02-06-2026", data: ["75", "59", "87", "59", "65"] },
    { date: "03-06-2026", data: ["62", "02", "23", "81", "49"] },
    { date: "04-06-2026", data: ["45", "38", "70", "09", "68"] },
    { date: "05-06-2026", data: ["56", "85", "63", "38", "24"] },
    { date: "06-06-2026", data: ["92", "90", "56", "95", "44"] },
    { date: "07-06-2026", data: ["76", "65", "02", "08", "37"] },
    { date: "08-06-2026", data: ["85", "45", "14", "24", "11"] },
    { date: "09-06-2026", data: ["04", "07", "20", "19", "80"] },
    { date: "10-06-2026", data: ["59", "73", "39", "85", "99"] },
    { date: "11-06-2026", data: ["--", "--", "--", "--", "--"] },
  ];

  return (
    <div className="p-[2px] w-full box-border bg-black mx-auto">
      <ChartTable headers={table1Headers} rows={table1Rows} />
      <ChartTable headers={table2Headers} rows={table2Rows} />
    </div>
  );
};

export default MonthlyRecordChart;
