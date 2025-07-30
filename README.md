# Node.js Web Server Environment

This repository contains a simple Node.js web server implementation that demonstrates fundamental web development concepts including HTTP server creation, request handling, and basic server configuration. The project serves as a practical example of building web servers using Node.js core modules and showcases essential web development skills.

## Prerequisites

- Node.js and npm installed on your system
- Basic understanding of JavaScript programming concepts
- A modern web browser (Chrome, Firefox, Edge, Safari, etc.) for testing
- (Optional) A code editor like VS Code, Sublime Text, or Atom for easier code navigation
- Terminal or command prompt access

## Installation

1. **Clone the repository** (if not already downloaded):
   ```sh
   git clone <repository-url>
   cd Test-Node-Environment-main
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```

## How to Run

1. **Start the web server**:
   ```sh
   node index.js
   ```

2. **Access the server**:
   Open your web browser and navigate to `http://localhost:3000`

The server will start running and display a confirmation message in the terminal. You should see "Hello!" displayed in your browser when you visit the localhost URL.

## Project Structure

```
Test-Node-Environment-main/
├── index.js
├── package.json
└── README.md
```

- **index.js**: Main server file containing the HTTP server implementation
- **package.json**: Project metadata and dependencies
- **README.md**: Project documentation (this file)

## Features

- **HTTP Server Creation**: Basic web server using Node.js http module
- **Request Handling**: Simple request/response processing
- **Server Configuration**: Configurable hostname and port settings
- **Content Delivery**: Serves plain text content to web browsers
- **Server Logging**: Console output for server status and requests
- **Cross-Platform Compatibility**: Works on Windows, macOS, and Linux
- **Real-time Server**: Continuously listens for incoming HTTP requests
- **Error Handling**: Basic HTTP status code management

## Server Details

### Server Configuration
- **Hostname**: localhost
- **Port**: 3000
- **Protocol**: HTTP
- **Content Type**: text/plain

### Request Processing
- **Function**: `http.createServer()`
- **Purpose**: Creates an HTTP server instance
- **Request Handler**: Processes incoming HTTP requests
- **Response**: Returns "Hello!" message to all requests
- **Status Code**: 200 (OK)

### Server Lifecycle
1. **Initialization**: Server created with request handler
2. **Listening**: Server starts listening on specified port
3. **Request Processing**: Handles incoming HTTP requests
4. **Response Generation**: Sends response back to client
5. **Continuous Operation**: Server remains active until stopped

## Code Structure

### Core Modules Used
- **http**: Node.js built-in HTTP server module
- **inspector**: Console logging functionality

### Main Components

#### Server Configuration
```javascript
const serverName = "localhost";
const portNumber = 3000;
```
- Configurable server parameters
- Easy to modify for different environments

#### Request Handler
```javascript
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello!");
});
```
- Processes all incoming HTTP requests
- Sets appropriate response headers
- Returns simple text content

#### Server Activation
```javascript
server.listen(portNumber, serverName, () => {
    console.log("Web server running at: http://" + serverName + ":" + portNumber);
});
```
- Starts the server on specified port
- Provides feedback on successful startup
- Displays server URL for easy access

## Data Structures Used

The application demonstrates various web development concepts:

- **HTTP Server Object**: Core server instance
- **Request Object**: Incoming HTTP request data
- **Response Object**: Outgoing HTTP response data
- **Callbacks**: Asynchronous function handling
- **Constants**: Configuration variables
- **Event Handlers**: Request processing functions

## Web Development Concepts

### HTTP Protocol
- **Request/Response Model**: Client-server communication
- **Status Codes**: HTTP response status management
- **Headers**: Content type and metadata handling
- **Methods**: GET request processing

### Server Architecture
- **Event-Driven**: Asynchronous request handling
- **Single-Threaded**: Node.js event loop model
- **Non-Blocking**: Concurrent request processing
- **Stateless**: Each request handled independently

### Network Concepts
- **Port Binding**: Server listening on specific port
- **Localhost**: Local development environment
- **TCP/IP**: Underlying network protocol
- **Socket Management**: Connection handling

## Code Quality Features

- **Clean Architecture**: Well-structured server setup
- **Modular Design**: Separated configuration and logic
- **Clear Naming**: Descriptive variable and function names
- **Error Prevention**: Proper HTTP status codes
- **Readable Code**: Well-commented and organized
- **Best Practices**: Following Node.js conventions

## Performance Considerations

- **Lightweight**: Minimal resource usage
- **Fast Startup**: Quick server initialization
- **Efficient Handling**: Simple request processing
- **Memory Management**: Automatic garbage collection
- **Scalability**: Foundation for more complex applications

## User Experience Flow

1. **Server Start**: Run the application to start the web server
2. **Browser Access**: Navigate to localhost:3000 in web browser
3. **Content Display**: See "Hello!" message in browser
4. **Continuous Service**: Server remains active for multiple requests
5. **Easy Testing**: Simple setup for development and testing

## Development Notes

- The application uses pure Node.js with no external dependencies
- Server is designed for development and learning purposes
- Easy to extend with additional routes and functionality
- Follows Node.js best practices and conventions
- Provides foundation for more complex web applications
- Suitable for learning HTTP server concepts

## Extending the Project

### Adding Routes
```javascript
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home page');
    } else if (req.url === '/about') {
        res.end('About page');
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});
```

### Adding HTML Content
```javascript
res.setHeader("Content-Type", "text/html");
res.end("<h1>Hello World!</h1>");
```

### Adding JSON API
```javascript
res.setHeader("Content-Type", "application/json");
res.end(JSON.stringify({ message: "Hello from API" }));
```

## Learn More

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [HTTP Module Documentation](https://nodejs.org/api/http.html)
- [Web Development with Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [HTTP Protocol](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [Server-Side JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Web Server Architecture](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview)

## Troubleshooting

- **Port Already in Use**: Change port number in index.js if 3000 is occupied
- **Node.js Not Found**: Ensure Node.js is properly installed (`node -v` to check)
- **Permission Denied**: Run with appropriate permissions on Unix systems
- **Browser Connection**: Ensure firewall allows localhost connections
- **Server Not Starting**: Check console for error messages
- **Content Not Displaying**: Verify browser is accessing correct URL

## Common Issues and Solutions

### Port 3000 Already in Use
```javascript
const portNumber = 3001; // Change to available port
```

### Server Won't Start
- Check if Node.js is installed: `node --version`
- Verify file permissions
- Check for syntax errors in index.js

### Browser Shows Connection Refused
- Ensure server is running (`node index.js`)
- Check if port is correct in browser URL
- Verify no firewall blocking localhost

For questions or contributions, please open an issue or pull request.
