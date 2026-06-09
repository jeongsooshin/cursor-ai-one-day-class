import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { isValidEmail, getValidEmails, extractEmails, getUniqueValidEmails } from './email.js';

describe('isValidEmail', () => {
    it('유효한 이메일 문자열에 true를 반환한다', () => {
        assert.equal(isValidEmail('alice@example.com'), true);
        assert.equal(isValidEmail('bob@test.org'), true);
    });

    it('유효하지 않은 값에 false를 반환한다', () => {
        assert.equal(isValidEmail('invalid-email'), false);
        assert.equal(isValidEmail(''), false);
        assert.equal(isValidEmail(null), false);
        assert.equal(isValidEmail(123), false);
    });
});

describe('getValidEmails', () => {
    it('유효한 이메일만 필터링한다', () => {
        const emails = ['alice@example.com', 'bad', '', 'bob@test.org', null];
        assert.deepEqual(getValidEmails(emails), ['alice@example.com', 'bob@test.org']);
    });

    it('배열이 아닌 입력에 빈 배열을 반환한다', () => {
        assert.deepEqual(getValidEmails(null), []);
        assert.deepEqual(getValidEmails('not-an-array'), []);
    });
});

describe('getUniqueValidEmails', () => {
    it('유효한 이메일만 남기고 중복을 제거한다', () => {
        const emails = [
            'alice@example.com',
            'alice@example.com',
            'bad',
            'bob@test.org',
            'bob@test.org',
        ];
        assert.deepEqual(getUniqueValidEmails(emails), ['alice@example.com', 'bob@test.org']);
    });

    it('배열이 아닌 입력에 빈 배열을 반환한다', () => {
        assert.deepEqual(getUniqueValidEmails(null), []);
    });
});

describe('extractEmails', () => {
    it('사용자 객체에서 유효한 이메일만 추출한다', () => {
        const users = [
            { name: 'Alice', email: 'alice@example.com' },
            { name: 'Bob', email: 'invalid' },
            { name: 'Carol', email: 'carol@test.org' },
        ];
        assert.deepEqual(extractEmails(users), ['alice@example.com', 'carol@test.org']);
    });

    it('배열이 아닌 입력에 빈 배열을 반환한다', () => {
        assert.deepEqual(extractEmails(undefined), []);
    });
});
