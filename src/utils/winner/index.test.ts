import { identifyWinner } from './index';

test('should return valid wining cells', () => {
    // Arrange
    const cells = [
        {
            key: 1,
            value: 'X',
            location: '0,0',
        },
        {
            key: 2,
            value: 'O',
            location: '0,1',
        },
        {
            key: 3,
            value: 'O',
            location: '0,2',
        },
        {
            key: 4,
            value: 'O',
            location: '0,0',
        },
        {
            key: 5,
            value: 'X',
            location: '0,1',
        },
        {
            key: 6,
            value: 'X',
            location: '0,2',
        },
        {
            key: 7,
            value: 'X',
            location: '0,0',
        },
        {
            key: 8,
            value: 'O',
            location: '0,1',
        },
        {
            key: 9,
            value: 'X',
            location: '0,2',
        },
    ];
    const expectedWiningRows = [0, 4, 8];

    // Act
    const winingRows = identifyWinner(cells);

    // Assert
    expect(winingRows).toMatchObject(expectedWiningRows);
});

test('should not return any wining cells for non wining matching pattern', () => {
    // Arrange
    const cells = [
        {
            key: 1,
            value: 'X',
            location: '0,0',
        },
        {
            key: 2,
            value: 'O',
            location: '0,1',
        },
        {
            key: 3,
            value: 'O',
            location: '0,2',
        },
        {
            key: 4,
            value: 'O',
            location: '0,0',
        },
        {
            key: 5,
            value: 'X',
            location: '0,1',
        },
        {
            key: 6,
            value: 'X',
            location: '0,2',
        },
        {
            key: 7,
            value: 'X',
            location: '0,0',
        },
        {
            key: 8,
            value: 'X',
            location: '0,1',
        },
        {
            key: 9,
            value: 'O',
            location: '0,2',
        },
    ];

    // Act
    const winingRows = identifyWinner(cells);

    // Assert
    expect(winingRows).toBe(undefined);
});
