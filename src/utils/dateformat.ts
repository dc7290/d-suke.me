import dayjs from 'dayjs'

dayjs.locale('ja')

export const formatDate = (date: string) => dayjs(date).format('YYYY.MM.DD')
export const formatDateARIA = (date: string) => dayjs(date).format('YYYY年MM月DD日')
