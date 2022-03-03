import styles from './RichEdit.module.scss'

type Props = {
  body: string
  className?: string
}

const RichEdit = ({ body, className }: Props) => {
  return <div className={`${styles.RichEdit} ${className ?? ''}`} dangerouslySetInnerHTML={{ __html: body }}></div>
}

export default RichEdit
