import isEmpty from "lodash.isempty"

export const FALLBACK = 'blocking'
export const PAGES_COUNT = 10

export const isCustomPageUri = (uri) => {
    const pagesToExclude = [
        '/'
    ]
    return pagesToExclude.includes(uri)
}
/**
 * handle if data is empty. if empty send to 404 page with notFound: true
 * @param {*} defaultProps 
 * @param {*} data 
 * @param {*} errors 
 * @param {*} field 
 * @returns object
 */
export const handleRedirectsAndReturnData = (defaultProps, data, errors, field) => {
    if (isEmpty(data)) {
        return {
            redirect : {
                destination: '/503',
                statusCode: 301
            }
        }
    }

    //if field is empty return 404
    if(field && isEmpty(data?.[field])){
        return {
            notFound: true
        }
    }

    return defaultProps
}