import s from './style.module.css';

const HeaderBlock = (props) => {

  return (
    <div>
      <div>
      
  <h1 className={s.header}>{props.title}this is Pokemon Card Game</h1>
  <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default HeaderBlock;