import Image from "next/image"
import Link from 'next/link'
 
export const metadata = {
  title: "Categories"
}

async function getCategories() {
  const res = await fetch(`http://localhost:1337/api/categories`, { cache: 'no-store' })
  const categories = await res.json()
 
  return categories
}

export default async function Categories() {
const categories = await getCategories()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      <ul>
      {/* <pre>{JSON.stringify(categories, null, '    ')}</pre> */}

      {categories.data.map((category: any) => {{
        if(category.slug == category.category){
          return(<li key={category.slug}><b><Link href={"/categories/subcategory/"+category.category+"/"}>{category.title}</Link></b></li>)
        }else{
          return(<li key={category.slug}><Link href={"/categories/"+category.slug}>{category.title}</Link></li>)
        }
        
        }})}
    </ul>

       
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
