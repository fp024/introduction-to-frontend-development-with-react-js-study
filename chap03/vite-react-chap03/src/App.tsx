export default function App() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log('email:', email);
        console.log('password:', password);
      }}
    >
      <input type="text" name="email" />
      <input type="password" name="password" />
      <button type="submit">전송</button>
    </form>
  );
}
