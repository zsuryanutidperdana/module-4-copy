export interface CategoryProperties {
  id?: string;
  category_name: string;
  category_description: string;
  is_active: boolean;
}

const TOKEN = localStorage.getItem("token");
export async function createCategory(state: CategoryProperties) {
  try {
    const body = {
      category_name: state.category_name,
      category_description: state.category_description,
      is_active: state.is_active,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(body),
    };
    const response = await fetch(
      "https://library-crud-sample.vercel.app/api/category/create",
      options
    );
    if (!response.ok) {
      throw new Error("There is a network problem");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteCategory(id: any) {
  try {
    const body = {
      id: id,
    };
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(body),
    };
    const response = await fetch(
      `https://library-crud-sample.vercel.app/api/category/${body.id}`,
      options
    );
    if (!response.ok) {
      throw new Error("There is a network problem");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export async function updateCategory(state: CategoryProperties) {
  try {
    const body = {
      id: state.id,
      category_name: state.category_name,
      category_description: state.category_description,
      is_active: state.is_active,
    };
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify(body),
    };
    const response = await fetch(
      "https://library-crud-sample.vercel.app/api/category/update",
      options
    );
    if (!response.ok) {
      throw new Error("There is a network problem");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
