import React from 'react';

// import { Container } from './styles';
interface ContentBoxProps {
    cProps?: {
        padding?: number | string | undefined,
        minHeight?: number | string | undefined
    },
    contentStyle?: React.CSSProperties | undefined
}
const ContentBox: React.FC<ContentBoxProps> = ({ children, cProps, contentStyle }) => {
    return (
        <div
            className="site-layout-background"
            style={{ padding: cProps?.padding || 24, minHeight: cProps?.minHeight || 860, ...contentStyle }}>
            {children}
        </div>
    );
}

export default ContentBox;