import { DetailedHTMLProps, ImgHTMLAttributes } from 'react'

type Props = DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
  alt: string
}

const Img = ({ decoding = 'async', ...props }: Props) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img {...props} decoding={decoding} />
}

export default Img
