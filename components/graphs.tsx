import { BRAND_COLOR } from '@/constants';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Data {
    data: [] | any
}

export default function GraphsComponent({ data }: Data) {
    console.log('data', data);
    return (
        <ResponsiveContainer width={100} height={80}>
            <LineChart width={20} height={40} data={data}>
                <Line type="monotone" dataKey="pv" stroke={BRAND_COLOR} strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    );

}
