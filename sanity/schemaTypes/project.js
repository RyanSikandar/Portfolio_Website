export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: "title",
        title: "title",
        description:"Title of project",
        type: "string"
      },
      {
        name: "image",
        title: "Image",
        type: "image"
      },
      {
        name: "company",
        title: "Company",
        type: "text",
      },
      {
        name: "dateStarted",
        title: "DateStarted",
        type: "date"
      },
      {
        name: "dateEnded",
        title: "DateEnded",
        type: "date",
      },
      {
        name: "isCurrentlyWorkingHere",
        title: "IsCurrentlyWorkingHere",
        type: "boolean"
      },
      {
        name: "technologies",
        title: "Technologies",
        type: "array",
        of: [{ type: "reference", to: { type: "skill" } }]
      },
      {
        name: "points",
        title: "Points",
        type: "array",
        of: [{ type: "string" }]
      },
  
    ]
  
  }
  