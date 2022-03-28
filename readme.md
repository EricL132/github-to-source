# Github To Source
Simple react component to put repository link on bottom right of page  

# Installation
```
npm i github-to-source-link
```

# Props
| Prop | Type | Description |
| --- | --- | --- |
| repoLink | String | Link to github repository
| color | String | Color of github logo
| size | String | Size of github logo
| target | String | Target attribute for anchor
| text | String | Text after github logo
| textStyles | Object | Style for text
 
## Default 
![](https://i.gyazo.com/753193819ef62ee785bc1a9f3f137886.png)
# Usage 
```
    import { GithubToSource } from "github-to-source-link";

    function App(){
        return (
            <GithubToSource 
                repoLink="https://github.com/EricL132/github-to-source.git" 
                target="_blank" 
                rel="noreferrer"> 
                color="36a3de" 
                size="30" 
                text="Open to Repository" 
                textStyles={{color:"#7ade36",fontWeight:700}}
            </GithubToSource>
        )
    }
```
### With above props
![](https://i.gyazo.com/bd6efa244bcdf01205aac29d07a4a172.png)
