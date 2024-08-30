export function isoToFullDate(isoDate: string): string {
    const dateObj = new Date(isoDate)
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }

    let dateString = dateObj.toLocaleDateString('fr-FR', options)
    if (dateObj.getDate() === 1) {
        dateString = dateString.replace('1', '1er')
    }

    return dateString
}
