import clsx from 'clsx'

type Props = {
  title: string
  className?: string
}

const PrimaryTitle = ({ title, className }: Props) => {
  return <h2 className={clsx(className, 'text-2xl lg:text-3xl')}>{title}</h2>
}

export default PrimaryTitle
