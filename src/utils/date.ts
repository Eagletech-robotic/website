export function isoToFullDate(isoDate: string): string {
    const dateObj = new Date(isoDate)
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }
    return dateObj.toLocaleDateString('fr-FR', options)
}
