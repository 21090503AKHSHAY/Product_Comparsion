import { Link } from 'react-router-dom';

export function Landing() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>📱 iPhone 15 vs iPhone 16 - Comparison</h1>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginTop: '20px' }}>
        {/* iPhone 15 Image */}
        <div>
          <img 
            src="https://via.placeholder.com/250x400?text=iPhone+15" 
            alt="iPhone 15" 
            style={{ width: '250px', height: '400px', borderRadius: '10px' }} 
          />
          <h3>iPhone 15</h3>
        </div>

        {/* iPhone 16 Image */}
        <div>
          <img 
            src="https://via.placeholder.com/250x400?text=iPhone+16" 
            alt="iPhone 16" 
            style={{ width: '250px', height: '400px', borderRadius: '10px' }} 
          />
          <h3>iPhone 16</h3>
        </div>
      </div>

      {/* Comparison Table */}
      <table 
        style={{ 
          width: '80%', 
          margin: '20px auto', 
          borderCollapse: 'collapse', 
          textAlign: 'center' 
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#ddd' }}>
            <th>Feature</th>
            <th>iPhone 15</th>
            <th>iPhone 16</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Processor</td>
            <td>A16 Bionic</td>
            <td>A17 Pro</td>
          </tr>
          <tr>
            <td>Display</td>
            <td>6.1-inch OLED</td>
            <td>6.3-inch OLED</td>
          </tr>
          <tr>
            <td>Battery Life</td>
            <td>20 hours</td>
            <td>22 hours</td>
          </tr>
          <tr>
            <td>Camera</td>
            <td>48MP</td>
            <td>48MP with Ultra-Zoom</td>
          </tr>
        </tbody>
      </table>

      {/* Back to Login Button */}
      <Link to="/login">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Go to Login
        </button>
      </Link>
    </div>
  );
}
