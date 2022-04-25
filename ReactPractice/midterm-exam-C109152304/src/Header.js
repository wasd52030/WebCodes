import { ReactComponent as UserSVG } from "./svgs/user.svg"

export default function Header(props) {
  return (
    <div className="header">
      <span className="logo">NKUST Music</span>
      <span className="user-profile">
        <UserSVG className="avatar" />
        <span className="name">{props.name}</span>
      </span>
    </div>
  )
}
