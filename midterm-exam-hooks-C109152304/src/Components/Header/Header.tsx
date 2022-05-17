import { ReactComponent as UserSVG } from '../../svgs/user.svg'
import "../../App.css"

export default function Header(props: { name: string, id: string }) {

    const { name, id } = props

    return (
        <div className="header">
            <span className="logo">NKUST MUSIC</span>
            <span className="user-profile">
                <UserSVG className='avatar' />
                <span className="name">{name} {id}</span>
            </span>
        </div>
    )
}