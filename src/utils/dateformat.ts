import dayjs from 'dayjs'

dayjs.locale('ja')

export const formatYYYYMMDD = (date: string) => dayjs(date).format('YYYY.MM.DD')
