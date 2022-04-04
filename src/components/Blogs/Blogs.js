import React from "react";
import "flowbite";

const Blogs = () => {
  return (
    <div>
      <h1 className="text-5xl text-center my-6">Blogs Section </h1>
      <hr className="container mx-auto w-2/5" />
      <div className="container mx-2 md:w-2/4 md:mx-auto mt-6">
        <h1>
          <strong>Q1 : What is Semantic Tag?</strong>
        </h1>
        <p className="border-4 p-4 rounded-md mt-4">
          Semantic HTML tags allows to add meaning to the markup so that search
          engines, screen readers, and web browsers can understand it. Semantic
          HTML tags lets serve structured content to the users, which is
          especially important for on-page SEO and accessibility. Some of the
          Semantic Tags are :
          &lt;html&gt;,&lt;head&gt;,&lt;body&gt;,&lt;p&gt;,&lt;img&gt; etc.
        </p>
        <br />
        <h1>
          <strong>
            Q2: What is the difference between Inline, Block and Inline-block?
          </strong>
        </h1>
        <div className="border-4 p-4 rounded-md mt-4">
          {" "}
          <strong>
            Here are the differences between display inline, block and
            inline-block :
          </strong>{" "}
          <br /> <br />
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Block
                  </th>
                  <td className="px-6 py-4">
                    A block element always starts on a new line, and fills up
                    the horizontal space left and right on the web page.
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Inline
                  </th>
                  <td className="px-6 py-4">
                    Inline elements don’t start on a new line, they appear on
                    the same line as the content and tags beside them.
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    Inline-block
                  </th>
                  <td className="px-6 py-4">
                    Inline-block elements are similar to inline elements, except
                    they can have padding and margins added on all four sides.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
