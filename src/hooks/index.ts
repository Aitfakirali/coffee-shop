import { useEffect } from 'react';

import { useState } from 'react';

import { useRef } from 'react';

export const useResize = () => {
    const [chartWidth, setChartWidth] = useState(0);
    const [chartHeight, setChartHeight] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleResize() {
            if (containerRef.current) {
                const { width, height } =
                    containerRef.current.getBoundingClientRect();
                setChartWidth(width);
                setChartHeight(height);
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { containerRef, chartHeight, chartWidth };
};
