import React from "react";

const Blog = () => {
  return (
    <div className="w-11/12 mx-auto bg-gray-200 p-4 rounded-xl mt-4">
      <div className="mt-4">
        <h1 className="text-xl">1. Difference between SQL and NoSQL:</h1>
        <div className=" flex justify-center">
          <table className="mt-4">
            <tr>
              <th className="border-4 border-slate-400">SQL</th>
              <th className="border-4 border-slate-400">NoSQL</th>
            </tr>
            <tr>
              <td className="border-4 border-slate-400 p-4">1. SQL databases are relational</td>
              <td className="border-4 border-slate-400 p-4">
                1. NoSQL databases are non-relational
              </td>
            </tr>
            <tr>
              <td className="border-4 border-slate-400 p-4">
                {" "}
                2. SQL databases use structured query language and have a
                predefined schema
              </td>
              <td className="border-4 border-slate-400">
                2. NoSQL databases have dynamic schemas for unstructured data
              </td>
            </tr>
            <tr>
              <td className="border-4 border-slate-400 p-4">
                3. SQL databases are vertically scalable
              </td>
              <td className="border-4 border-slate-400 p-4">
                3. NoSQL databases are horizontally scalable
              </td>
            </tr>
            <tr>
              <td className="border-4 border-slate-400 p-4">4. SQL databases are table-based</td>
              <td className="border-4 border-slate-400 p-4">
                4. NoSQL databases are document, key-value, graph, or
                wide-column stores
              </td>
            </tr>
            <tr>
              <td className="border-4 border-slate-400 p-4">
                5. SQL databases are better for multi-row transactions
              </td>
              <td className="border-4 border-slate-400 p-4">
                5. NoSQL is better for unstructured data like documents or JSON
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="mt-8 p-4 rounded-lg">
        <h1 className="text-xl">2. What is JWT, and how does it work?</h1>
        <p>
          <h1 className="mt-4 text-lg text-orange-700">2.1 What is JWT?</h1>
          JSON Web Token (JWT) is an open standard (RFC 7519) for securely
          transmitting information between parties as JSON object. It is
          compact, readable and digitally signed using a private key/ or a
          public key pair by the Identity Provider(IdP).
        </p>
        <p>
          <h1 className="mt-4 text-lg text-orange-700">
            2.2 How does JWT work?
          </h1>
          JWTs differ from other web tokens in that they contain a set of
          claims. Claims are used to transmit information between two parties.
          What these claims are depends on the use case at hand. For example, a
          claim may assert who issued the token, how long it is valid for, or
          what permissions the client has been granted. A JWT is a string made
          up of three parts, separated by dots (.), and serialized using base64.
          In the most common serialization format, compact serialization, the
          JWT looks something like this: xxxxx.yyyyy.zzzzz. Once decoded, you
          will get two JSON strings: The header and the payload. The signature.
          The JOSE (JSON Object Signing and Encryption) header contains the type
          of token — JWT in this case — and the signing algorithm. The payload
          contains the claims. This is displayed as a JSON string, usually
          containing no more than a dozen fields to keep the JWT compact. This
          information is typically used by the server to verify that the user
          has permission to perform the action they are requesting. There are no
          mandatory claims for a JWT, but overlaying standards may make claims
          mandatory. For example, when using JWT as bearer access token under
          OAuth2.0, iss, sub, aud, and exp must be present. some are more common
          than others. The signature ensures that the token hasn’t been altered.
          The party that creates the JWT signs the header and payload with a
          secret that is known to both the issuer and receiver, or with a
          private key known only to the sender. When the token is used, the
          receiving party verifies that the header and payload match the
          signature.
        </p>
      </div>
      <div className="mt-4">
        <h1 className="text-xl">
          3. Difference between Javascript and Node JS:
        </h1>
        <table className="mt-4">
          <tr>
            <th className="border-4 border-slate-400">Javascript</th>
            <th className="border-4 border-slate-400">Node JS</th>
          </tr>
          <tr>
            <td className="border-4 border-slate-400 p-4">
              1. It is an accessible, bridge, parsed, lightweight, reactive, and
              web apps programming language.
            </td>
            <td className="border-4 border-slate-400 p-4">
              1. It's a bridge, open-source Js runtime environment for executing
              Js on the server.
            </td>
          </tr>
          <tr>
            <td className="border-4 border-slate-400 p-4">
              {" "}
              2. It's a programming language, after all. Any browser with a
              competent browser engine will operate.
            </td>
            <td className="border-4 border-slate-400">
              2. It's a JavaScript translator and environment that includes some
              valuable libraries for JavaScript programming.
            </td>
          </tr>
          <tr>
            <td className="border-4 border-slate-400 p-4">
              3. It's most commonly used on client-side servers.
            </td>
            <td className="border-4 border-slate-400 p-4">
              3. It's mainly popular on the server-side.
            </td>
          </tr>
          <tr>
            <td className="border-4 border-slate-400 p-4">
              4. The node community does not care about JavaScript.
            </td>
            <td className="border-4 border-slate-400 p-4">
              4. All node projects represent the JavaScript community.
            </td>
          </tr>
          <tr>
            <td className="border-4 border-slate-400 p-4">
              5. It's made for creating network-centric apps.
            </td>
            <td className="border-4 border-slate-400 p-4">
              5. It's made for real-time data-intensive apps that run on
              multiple platforms.
            </td>
          </tr>
          <tr>
            <td className="border-4 border-slate-400 p-4">
              6. It's a new release of the ECMA script that works on the
              C++-based V8 engine.
            </td>
            <td className="border-4 border-slate-400 p-4">
              6. C++, C, and JavaScript are used.
            </td>
          </tr>
          <tr>
            <td className="border-4 border-slate-400 p-4">
              7. TypedJS, RamdaJS, and other JavaScript frameworks are examples.
            </td>
            <td className="border-4 border-slate-400 p-4">
              7. Nodejs modules include Lodash and Express. All of these modules
              must be imported from npm.
            </td>
          </tr>
        </table>
      </div>
      <div className="mt-8 p-4 rounded-lg">
        <h1 className="text-xl">4. How does NodeJS handle multiple requests at the same time?</h1>
        <p>
        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
        </p>
       </div> 
    </div>
  );
};

export default Blog;
