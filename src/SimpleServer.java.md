## Simple Java HTTP Server Documentation 📜

**Table of Contents:**

- [Introduction](#introduction)
- [Setup](#setup)
- [Usage](#usage)
- [Example Usage](#example-usage)
- [Troubleshooting](#troubleshooting)

---

### Introduction 💡

This document provides a comprehensive guide to the Simple Java HTTP Server, a lightweight and easy-to-use server for serving static content over HTTP.

---

### Setup 🔧

To set up the server, follow these steps:

1. Import the necessary libraries:

```java
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
```

2. Create an instance of `HttpServer`:

```java
HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
```

3. Register a `HttpHandler` to handle incoming requests:

```java
server.createContext("/", new MyHandler());
```

4. Start the server:

```java
server.start();
```

**Note:** The default port is 8000, but you can change it by passing a different port number to the `InetSocketAddress` constructor.

---

### Usage 💻

To use the server, simply send HTTP requests to the specified port. The server will respond with the content specified in the `MyHandler` class.

---

### Example Usage 🌐

Here's an example usage code:

```java
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Client {

  public static void main(String[] args) throws IOException, InterruptedException {
    HttpClient client = HttpClient.newHttpClient();
    HttpRequest request = HttpRequest.newBuilder(URI.create("http://localhost:8000/")).GET().build();
    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

    // Print the response body
    System.out.println(response.body());
  }
}
```

---

### Troubleshooting 🛠️

If you encounter any issues with the server, check the following:

- Make sure the server is running on the correct port.
- Check the `MyHandler` class to ensure it is handling requests correctly.
- Check the client code to make sure it is sending requests to the correct URL and port.

---

**Additional Notes:**

- The server currently only supports static content.
- The server can be customized by extending the `MyHandler` class and implementing custom handling logic.

---

**Enjoy using the Simple Java HTTP Server! 🤝**