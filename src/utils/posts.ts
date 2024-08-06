export function checkFrontMatter(
    frontMatter: FrontMatter | undefined
): { result: string[]; isError: true } | { result: Required<FrontMatter>; isError: false } {
    const { author, date, summary, title, draft } = frontMatter || {}

    const errors: string[] = []
    const pushError = (error: string) => {
        errors.push(`The following field has not been specified: ${error}`)
    }

    if (!author) pushError('author')
    if (!date) pushError('date')
    if (!summary) pushError('summary')
    if (!title) pushError('title')
    if (draft === undefined) pushError('draft')

    if (errors.length) {
        return { result: errors, isError: true }
    } else {
        return {
            result: { author: author!, date: date!, summary: summary!, title: title!, draft: draft! },
            isError: false,
        }
    }
}
