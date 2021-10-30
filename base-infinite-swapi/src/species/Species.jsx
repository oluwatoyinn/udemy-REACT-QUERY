export function Species({ name, language, averageLifespan }) {
  return (
    <ol>
      {name}
      <ul>
        <li>language: {language}</li>
        <li>average lifespan: {averageLifespan}</li>
      </ul>
    </ol>
  );
}
