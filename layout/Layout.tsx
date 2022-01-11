import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import cn from 'classnames';

export const Layout = ({ size = 'm', children, className, ...props }: LayoutProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.l]: size == 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};