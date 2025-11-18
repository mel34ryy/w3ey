import "../Blog.css";
import { useNavigate } from "react-router-dom";
export default function Blog3() {
  const navigate = useNavigate();
  return (
    <div className="blog-details">
      <a onClick={() => navigate(-1)} className="back-link">
        &larr; Back to Blogs
      </a>
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
        alt="Cover Image"
        className="cover-image"
      />
      <h1 className="blog-title">Sorting Algorithms Explained</h1>
      <p className="blog-subtitle">
        Understand sorting complexities and their practical applications.
      </p>
      <div className="blog-content">
        <p>
          Sorting algorithms are fundamental to computer science and are used in
          various applications, from database queries to search engines. This
          article explores some of the most common sorting algorithms, their
          time complexities, and when to use them.
        </p>
        <p>
          Let's start with Bubble Sort, a simple but inefficient algorithm that
          repeatedly steps through the list, compares adjacent elements, and
          swaps them if they are in the wrong order.
        </p>
        <pre>
          <code>{`function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i &lt; n - 1; i++) {
    for (let j = 0; j &lt; n - i - 1; j++) {
      if (arr[j] &gt; arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`}</code>
        </pre>
        <p>
          Quick Sort is much more efficient for larger datasets. It uses a
          divide-and-conquer approach, selecting a pivot element and
          partitioning the array around it.
        </p>
        <pre>
          <code>{`function quickSort(arr) {
  if (arr.length &lt;= 1) return arr;
  
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  
  for (let i = 0; i &lt; arr.length - 1; i++) {
    if (arr[i] &lt; pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];
}`}</code>
        </pre>
        <p>
          Merge Sort is another efficient algorithm that divides the array into
          halves, sorts them recursively, and then merges the sorted halves.
        </p>
        <pre>
          <code>{`function mergeSort(arr) {
  if (arr.length &lt;= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  
  while (i &lt; left.length && j &lt; right.length) {
    if (left[i] &lt; right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}`}</code>
        </pre>
        <p>
          Understanding these algorithms helps in choosing the right tool for
          the job. For small datasets, simple sorts might suffice, but for
          larger ones, more efficient algorithms like Quick Sort or Merge Sort
          are essential.
        </p>
      </div>
    </div>
  );
}
