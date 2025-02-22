// import React from "react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// const maxSupply = 3000000000; // 3 Billion

// const generateData = () => {
//   const months = 36; // Total vesting period is 3 years
//   const data = [];

//   for (let i = 0; i <= months; i++) {
//     // Community: 30% at TGE, 70% over 36 months
//     const communityTotal = maxSupply * 0.3; // 30% of total supply
//     const communityTGE = communityTotal * 0.3; // 30% unlocks at TGE
//     const communityMonthly = (communityTotal * 0.7) / months; // 70% over 36 months
//     const communityUnlocked = i === 0 ? communityTGE : communityTGE + communityMonthly * i;

//     // Liquidity Reserve: 10% at TGE, 90% over 36 months
//     const liquidityTotal = maxSupply * 0.4; // 40% of total supply
//     const liquidityTGE = liquidityTotal * 0.1; // 10% unlocks at TGE
//     const liquidityMonthly = (liquidityTotal * 0.9) / months; // 90% over 36 months
//     const liquidityUnlocked = i === 0 ? liquidityTGE : liquidityTGE + liquidityMonthly * i;

//     // Core Contributors: 1-year cliff, 30% after 12 months, 70% over next 24 months
//     const coreTotal = maxSupply * 0.1; // 10% of total supply
//     let coreUnlocked = 0;
//     if (i >= 12) { // After 1-year cliff (12 months)
//       const coreCliffUnlock = coreTotal * 0.3; // 30% unlocks at 12 months
//       const coreRemaining = coreTotal * 0.7; // 70% remaining
//       const coreMonthly = coreRemaining / 24; // Spread over 24 months
//       coreUnlocked = coreCliffUnlock + Math.min(i - 12, 24) * coreMonthly; // Caps at 24 months after cliff
//     }

//     // Early Backers: 20% at TGE, 80% over 36 months
//     const earlyTotal = maxSupply * 0.2; // 20% of total supply
//     const earlyTGE = earlyTotal * 0.2; // 20% unlocks at TGE
//     const earlyMonthly = (earlyTotal * 0.8) / months; // 80% over 36 months
//     const earlyUnlocked = i === 0 ? earlyTGE : earlyTGE + earlyMonthly * i;

//     data.push({
//       month: i,
//       Community: Math.min(communityUnlocked, communityTotal), // Cap at allocated amount
//       LiquidityReserve: Math.min(liquidityUnlocked, liquidityTotal),
//       CoreContributors: Math.min(coreUnlocked, coreTotal),
//       EarlyBackers: Math.min(earlyUnlocked, earlyTotal),
//     });
//   }

//   return data;
// };

// const VestingChart = () => {
//   const data = generateData();

//   return (
//     <LineChart width={800} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis
//         dataKey="month"
//         label={{ value: "Months", position: "insideBottomRight", offset: -10 }}
//       />
//       <YAxis
//         label={{ value: "Tokens Unlocked", angle: -90, position: "insideLeft" }}
//         domain={[0, maxSupply * 0.4]} // Adjusted to max allocation (40%) for better visibility
//         tickFormatter={(value) => `${(value / 1000000000).toFixed(1)}B`} // Show in billions
//       />
//       <Tooltip formatter={(value) => `${(value / 1000000).toFixed(2)}M`} /> {/* Show in millions */}
//       <Legend />
//       <Line type="monotone" dataKey="Community" stroke="#8884d8" strokeWidth={2} />
//       <Line type="monotone" dataKey="LiquidityReserve" stroke="#82ca9d" strokeWidth={2} />
//       <Line type="monotone" dataKey="CoreContributors" stroke="#ffc658" strokeWidth={2} />
//       <Line type="monotone" dataKey="EarlyBackers" stroke="#ff7300" strokeWidth={2} />
//     </LineChart>
//   );
// };

// export default VestingChart;

import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const maxSupply = 3000000000; // 3 Billion

const generateData = () => {
  const months = 36; // Total vesting period is 3 years
  const data = [];

  for (let i = 0; i <= months; i++) {
    // Community: 30% at TGE, 70% over 36 months
    const communityTotal = maxSupply * 0.3; // 30% of total supply
    const communityTGE = communityTotal * 0.3; // 30% unlocks at TGE
    const communityMonthly = (communityTotal * 0.7) / months; // 70% over 36 months
    const communityUnlocked = i === 0 ? communityTGE : communityTGE + communityMonthly * i;

    // Liquidity Reserve: 10% at TGE, 90% over 36 months
    const liquidityTotal = maxSupply * 0.4; // 40% of total supply
    const liquidityTGE = liquidityTotal * 0.1; // 10% unlocks at TGE
    const liquidityMonthly = (liquidityTotal * 0.9) / months; // 90% over 36 months
    const liquidityUnlocked = i === 0 ? liquidityTGE : liquidityTGE + liquidityMonthly * i;

    // Core Contributors: 1-year cliff, 30% after 12 months, 70% over next 24 months
    const coreTotal = maxSupply * 0.1; // 10% of total supply
    let coreUnlocked = 0;
    if (i >= 12) { // After 1-year cliff (12 months)
      const coreCliffUnlock = coreTotal * 0.3; // 30% unlocks at 12 months
      const coreRemaining = coreTotal * 0.7; // 70% remaining
      const coreMonthly = coreRemaining / 24; // Spread over 24 months
      coreUnlocked = coreCliffUnlock + Math.min(i - 12, 24) * coreMonthly; // Caps at 24 months after cliff
    }

    // Early Backers: 20% at TGE, 80% over 36 months
    const earlyTotal = maxSupply * 0.2; // 20% of total supply
    const earlyTGE = earlyTotal * 0.2; // 20% unlocks at TGE
    const earlyMonthly = (earlyTotal * 0.8) / months; // 80% over 36 months
    const earlyUnlocked = i === 0 ? earlyTGE : earlyTGE + earlyMonthly * i;

    data.push({
      month: i,
      Community: Math.min(communityUnlocked, communityTotal), // Cap at allocated amount
      LiquidityReserve: Math.min(liquidityUnlocked, liquidityTotal),
      CoreContributors: Math.min(coreUnlocked, coreTotal),
      EarlyBackers: Math.min(earlyUnlocked, earlyTotal),
    });
  }

  return data;
};

const VestingChart = () => {
  const data = generateData();

  return (
    <AreaChart width={800} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="month"
        label={{ value: "Months", position: "insideBottomRight", offset: -10 }}
      />
      <YAxis
        label={{ value: "Tokens Unlocked", angle: -90, position: "insideLeft" }}
        domain={[0, maxSupply * 0.4]} // Adjusted to max allocation (40%) for better visibility
        tickFormatter={(value) => `${(value / 1000000000).toFixed(1)}B`} // Show in billions
      />
      <Tooltip formatter={(value) => `${(value / 1000000).toFixed(2)}M`} /> {/* Show in millions */}
      <Legend />
      <Area
        type="monotone"
        dataKey="Community"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
        strokeWidth={2}
      />
      <Area
        type="monotone"
        dataKey="LiquidityReserve"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
        strokeWidth={2}
      />
      <Area
        type="monotone"
        dataKey="CoreContributors"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
        strokeWidth={2}
      />
      <Area
        type="monotone"
        dataKey="EarlyBackers"
        stackId="1"
        stroke="#ff7300"
        fill="#ff7300"
        strokeWidth={2}
      />
    </AreaChart>
  );
};

export default VestingChart;