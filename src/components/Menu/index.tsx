import { ReactComponent as MenuIcon } from '../../assets/images/icons/menu.svg';

export default function Menu({className}: {
    className?: string
}) {
    return (
        <>
            <MenuIcon className={className} />
        </>
    )
}
