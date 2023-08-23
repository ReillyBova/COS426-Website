interface IProps {
    to: string;
    children: React.ReactNode;
}

/** A simple external link that opens in a new tab */
export const ExternalLink = ({ to, children }: IProps) => {
    return (
        <a target='_blank' rel='noopener noreferrer' href={to}>
            {children}
        </a>
    );
};
