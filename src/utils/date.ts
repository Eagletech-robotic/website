export function isoToFullDate(isoDate: string): string {
    const dateObj = new Date(isoDate)
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }
    const dateString = dateObj.toLocaleDateString('fr-FR', options)

    if (dateObj.getDay() === 1) {
        dateString.replace('1', '1er')
    }

    return dateString
}
