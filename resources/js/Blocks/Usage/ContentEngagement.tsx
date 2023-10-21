import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts';

import React from 'react';

export default (props: any): JSX.Element => {
    const { data } = props;

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="category" />

                <Radar name="Mike" dataKey="visits" stroke="" fill="#22C55D" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    );
};
