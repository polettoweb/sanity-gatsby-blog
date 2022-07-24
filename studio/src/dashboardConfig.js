export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62dcf3a900e3142b968fea2d",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-tzyytsfs",
                  apiId: "fba72803-3105-4af5-ac21-25c764a5d7f5",
                },
                {
                  buildHookId: "62dcf3a93e02383027946fdc",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-qnwa2d3t",
                  apiId: "ccc05f58-601d-4326-834f-a3a7ee41875e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/polettoweb/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-qnwa2d3t.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
