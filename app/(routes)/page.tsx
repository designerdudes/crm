import StatsCard from "@/components/statscard";
import TopBar from "@/components/topbar";
import Heading from "@/components/ui/heading";
import { User } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const StatsData = [
    {
      title: 'Total Leads',
      stat: 2300,
      statPrefix: '+',
      icon: <User />,
      desc: '+180.1% from last month',
      href: '/revenue',
      GraphsData: [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ]
    },
    {
      title: 'Total Accounts',
      stat: 30,
      statPrefix: '+',
      icon: <User />,
      desc: '+180.1% from last month',
      href: '/orders',
      GraphsData: [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ]
    },
    {
      title: 'Total Opportunities',
      stat: 30,
      statPrefix: '+',
      icon: <User />,
      desc: '+180.1% from last month',
      href: '/orders',
      GraphsData: [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ]
    },
    {
      title: 'Total Conversions',
      stat: 30,
      statPrefix: '+',
      icon: <User />,
      desc: '+180.1% from last month',
      href: '/orders',
      GraphsData: [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ]
    },

  ]


  const StatsDataForManger = [
    //remove revenue 
    ...StatsData.filter((data) => data.title !== 'Total Revenue')
  ]
  return (
    <div className='w-full space-y-4 h-full flex p-6 flex-col'>
      <div className="topbar w-full flex justify-between">
        <Heading className='leading-tight' title='Dashboard' />
        <div className='flex gap-2'>
          {/* <DatePickerWithRange />
            <CreateNew /> */}
        </div>
      </div>
      <div className='w-full flex gap-2'>
        {
          StatsData.map((data, index) => (
            <StatsCard data={data.GraphsData} key={index} {...data} />
          ))
        }
      </div>
    </div>

  );
}
