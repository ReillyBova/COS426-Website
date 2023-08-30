import { Theme } from '@mui/material';
import { SystemStyleObject } from '@mui/system';

export type Styles = SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>);
export type StylesGroup = Record<string, Styles>;
