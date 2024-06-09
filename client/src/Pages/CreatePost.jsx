import { Button, FileInput, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function CreatePost() {
  return (
    <div className="max-w-3xl mx-auto p-3 min-h-screen">
      <h1 className="text-center text-3xl font-semibold my-6">Create a post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <TextInput
            className="flex-1"
            placeholder="Title"
            required
            id="title"
            name="title"
          />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">React.js</option>
            <option value="nextjs">Next.js</option>{" "}
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput type="file" name="" accept="image/*" id="" />
          <Button gradientDuoTone="purpleToBlue" size="sm" type="button">
            Upload Image
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-60 mb-12"
          required
          id="content"
          name="content"
        />
        <Button gradientDuoTone='purpleToPink' type="submit" className="mb-12 mt-6 sm:mt-0">Publish</Button>
      </form>
    </div>
  );
}

export default CreatePost;
