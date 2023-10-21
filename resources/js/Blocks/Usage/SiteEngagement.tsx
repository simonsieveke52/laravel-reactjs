import React, { useMemo } from 'react';
import ReactDOM from 'react-dom';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, Text } from 'recharts';

const blues = [
    ['#FC7149'],
    ['#FC7149', '#7ED321'],
    ['#FC7149', '#7ED321', '#00A1D0'],
    ['#FC7149', '#7ED321', '#00A1D0', '#2776BD'],
    ['#FC7149', '#7ED321', '#00A1D0', '#2776BD', '#A8C600'],
    ['#FC7149', '#7ED321', '#00A1D0', '#2776BD', '#A8C600', '#8889DD'],
];

const getColor = (length: any, index: any) => {
    if (length <= blues.length) {
        return blues[length - 1][index];
    }

    return blues[blues.length - 1][index % blues.length];
};

const YAxisLeftTick = ({
    y,
    payload: { value },
}: {
    y: any;
    payload: {
        value: any;
    };
}) => {
    return (
        <Text x={0} y={y} textAnchor="start" verticalAnchor="middle" scaleToFit>
            {value}
        </Text>
    );
};

let ctx: any;

export const measureText14HelveticaNeue = (text: any) => {
    if (!ctx) {
        ctx = document.createElement('canvas').getContext('2d');
        ctx.font = "14px 'Helvetica Neue";
    }

    return ctx.measureText(text).width;
};

const BAR_AXIS_SPACE = 10;

const SiteEngagement = ({ data, yKey, xKey }: { data: any; yKey: any; xKey: any }) => {
    const maxTextWidth = useMemo(
        () =>
            data.reduce((acc: any, cur: any) => {
                const value = cur[yKey];
                const width = measureText14HelveticaNeue(value.toLocaleString());
                if (width > acc) {
                    return width;
                }
                return acc;
            }, 0),
        [data, yKey],
    );

    return (
        <ResponsiveContainer width={'100%'} height={50 * data.length} debounce={50}>
            <BarChart data={data} layout="vertical" margin={{ left: 30, right: maxTextWidth + (BAR_AXIS_SPACE - 8) }}>
                <XAxis
                    hide
                    axisLine={false}
                    fontFamily="sans-serif"
                    type="number"
                    ticks={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                />
                <YAxis type="category" width={60} fontFamily="sans-serif" dataKey="name" />
                <YAxis
                    orientation="right"
                    yAxisId={1}
                    dataKey={yKey}
                    type="category"
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `${value}%`}
                    mirror
                    tick={{
                        transform: `translate(${maxTextWidth + BAR_AXIS_SPACE}, 0)`,
                    }}
                />
                <Tooltip cursor={false} />
                <Bar dataKey={yKey} minPointSize={2} barSize={15} radius={8}>
                    {data.map((d: any, idx: any) => {
                        return <Cell key={d[xKey]} fill={getColor(data.length, idx)} />;
                    })}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default SiteEngagement;
