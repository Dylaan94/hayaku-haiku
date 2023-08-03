import { createContext, useState } from "react";

const KigoContext = createContext();

// export function KigoContextProvider(props) {
//   const [kigo, setKigoContext] = useState({});
//   return (
//     <KigoContext.Provider value={{ kigo, setKigoContext }}>
//       {props.children}
//     </KigoContext.Provider>
//   );
// }

export default KigoContext;
