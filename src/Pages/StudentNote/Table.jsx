const Table = ({ data }) => {
    return (
        
        <table>
            <tbody>
                <tr>
                <th>Author ID</th>
                <th>Title</th>
                <th>Text</th>
                <th>Sender</th>
            </tr>
            {data.map((item) => (
                <tr key={item.id}>
                <td>{item.authId}</td>
                <td>{item.title}</td>
                <td>{item.text}</td>
                <td>{item.sender}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;