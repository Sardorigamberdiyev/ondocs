
export interface IDocsTableFilterProps {
    filterActive?: 'filter-one' | 'filter-two' | 'filter-three' | 'filter-four' | 'filter-five';
    filterOneText: string;
    filterTwoText: string;
    filterThreeText: string;
    filterFourText?: string;
    filterFiveText?: string;
    filterOneClick?: () => void;
    filterTwoClick?: () => void;
    filterThreeClick?: () => void;
    filterFourClick?: () => void;
    filterFiveClick?: () => void;
    filterSearchClick?: (term: string) => void;
    filterSearchChange?: (term: string) => void;
}