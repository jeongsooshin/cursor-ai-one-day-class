/**
 * 이메일 문자열이 유효한 형식인지 검증한다.
 * @param {unknown} email - 검증할 이메일
 * @returns {boolean} 유효하면 true
 */
export function isValidEmail(email) {
    return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * 이메일 배열에서 유효한 이메일만 필터링한다.
 * @param {unknown} emails - 이메일 문자열 배열
 * @returns {string[]} 유효한 이메일 배열
 */
export function getValidEmails(emails) {
    if (!Array.isArray(emails)) {
        return [];
    }
    return emails.filter(isValidEmail);
}

/**
 * 사용자 객체 배열에서 유효한 이메일만 추출한다.
 * @param {unknown} users - email 속성을 가진 사용자 객체 배열
 * @returns {string[]} 유효한 이메일 배열
 */
export function extractEmails(users) {
    if (!Array.isArray(users)) {
        return [];
    }
    return getValidEmails(users.map(user => user.email));
}

/**
 * 이메일 배열에서 유효한 이메일만 추출하고 중복을 제거한다.
 * @param {unknown} emails - 이메일 문자열 배열
 * @returns {string[]} 중복이 제거된 유효 이메일 배열
 */
export function getUniqueValidEmails(emails) {
    return [...new Set(getValidEmails(emails))];
}
