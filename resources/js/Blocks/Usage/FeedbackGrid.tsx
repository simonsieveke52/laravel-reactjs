/* eslint-disable max-classes-per-file */
import React, { PureComponent } from 'react';
import { ResponsiveContainer, Treemap } from 'recharts';

const data = [
    {
        name: 'Manager',
        children: [
            { name: 'Axes', size: 1302 },
        ],
    },
    {
        name: 'Safety',
        children: [
            { name: 'AnchorControl', size: 2138 },
        ],
    },
    {
        name: 'Workload',
        children: [
            { name: 'Data', size: 544 },
        ],
    },
    {
        name: 'Bullying',
        children: [
            { name: 'DataEvent', size: 7313 },
        ],
    },
    {
        name: 'Drugs & alcohol',
        children: [
            { name: 'Legend', size: 20859 },
        ],
    },
    {
        name: 'Family',
        children: [
            { name: 'Legend', size: 20859 },
        ],
    },
];

const COLORS = ['#8889DD', '#F97315', '#F74214', '#A5D297', '#E2CF45', '#F8C12D'];

const CustomizedContent = (props:any) => {
    const { root, depth, x, y, width, height, index, colors, name } = props;

    return (
        <g>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                    fill: depth < 2 ? colors[Math.floor((index / root.children.length) * 6)] : 'none',
                    stroke: '#fff',
                    strokeWidth: 2 / (depth + 1e-10),
                    strokeOpacity: 1 / (depth + 1e-10),
                }}
            />
            {depth === 1 ? (
                <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="#fff" fontSize={14}>
                    {name}
                </text>
            ) : null}
            {depth === 1 ? (
                <text x={x + 4} y={y + 18} fill="#fff" fontSize={16} fillOpacity={0.9}>
                    {index + 1}
                </text>
            ) : null}
        </g>
    );
};

export default class FeedbackGrid extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/treemap-with-customized-content-7qxfp';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <Treemap
                    width={400}
                    height={200}
                    data={data}
                    dataKey="size"
                    // ratio={4 / 3}
                    stroke="#fff"
                    fill="#8884d8"
                    content={<CustomizedContent colors={COLORS} />}
                />
            </ResponsiveContainer>
        );
    }
}
