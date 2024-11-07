import fs from "fs"
import path from "path"
import matter from "gray-matter"

function getMDXFiles(filePath: string) {
    const files = fs.readdirSync(filePath)
    const filtredFiles = files.filter((file) => path.extname(file) === ".mdx")

    return filtredFiles
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  return matter(fs.readFileSync(filePath, "utf-8"))
}

function getMDXFileContent(filePath: string) {
  const fileContent = getMDXFiles(filePath)

  return fileContent.map((file) => {
    const { data: metadata, content } = readMDXFile(path.join(filePath, file))
    const slug = path.basename(file, path.extname(file))

    return {
      metadata,
      content,
      slug
    }
  })
}

export function getBlogPosts(){
    return getMDXFileContent(path.join(process.cwd(), "src", "app", "content", "posts"))
}

export function formatDate(date: string, includedRelative=false){
    const curentDate = new Date()

    if(!date.includes("T")){
        date = `${date}T00:00:00`;
    }

    const targetDate = new Date(date)

    const years = curentDate.getFullYear() - targetDate.getFullYear()
    const months = curentDate.getMonth() - targetDate.getMonth()
    const days = curentDate.getDate() - targetDate.getDate()

    let formattedDate = ""

    if(years > 0){
        formattedDate = `${years} year${years > 1 ? "s" : ""} ago`
    } else if(months > 0){
        formattedDate = `${months} month${months > 1 ? "s" : ""} ago`
    } else if(days > 0){
        formattedDate = `${days} day${days > 1 ? "s" : ""} ago`
    } else {
        formattedDate = "Today"
    }   

    let fullDate = targetDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })

    if(!includedRelative){
        return fullDate
    }

    return `${fullDate} (${formattedDate})`

}