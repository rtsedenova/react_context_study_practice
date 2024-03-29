export default function SizeTable({type}){
    const tableCellStyle = "py-2 px-4 border border-gray-300";
    const evenRowBgColor = "bg-white";
    const oddRowBgColor = "bg-gray-50";
    const tableHeaderBgColor = "bg-gray-100";
  
    let tableContent;
  
    if (type === "shoes") {
      tableContent = renderShoesSizeTable();
    } else if (type === "top") {
      tableContent = renderTopSizeTable();
    } else if (type === "bottom") {
      tableContent = renderBottomSizeTable();
    }
  
    function renderShoesSizeTable () {
      return (
        <>
          <h1 className="font-medium text-lg mt-6">Male:</h1>
          <table className="w-fit border-collapse border border-gray-300">
            <thead>
              <tr className={tableHeaderBgColor}>
                <th className={tableCellStyle}>EU Size</th>
                <th className={tableCellStyle}>UK Size</th>
                <th className={tableCellStyle}>Foot Length (cm)</th>
              </tr>
            </thead>
            <tbody>
              <tr className={evenRowBgColor}>
                <td className={tableCellStyle}>40</td>
                <td className={tableCellStyle}>6.5</td>
                <td className={tableCellStyle}>25.4</td>
              </tr>
              <tr className={oddRowBgColor}>
                <td className={tableCellStyle}>41</td>
                <td className={tableCellStyle}>7</td>
                <td className={tableCellStyle}>26.0</td>
              </tr>
              <tr className={evenRowBgColor}>
                <td className={tableCellStyle}>42</td>
                <td className={tableCellStyle}>8</td>
                <td className={tableCellStyle}>26.7</td>
              </tr>
              <tr className={oddRowBgColor}>
                <td className={tableCellStyle}>43</td>
                <td className={tableCellStyle}>9</td>
                <td className={tableCellStyle}>27.3</td>
              </tr>
              {/* ... */}
            </tbody>
          </table>

          <h1 className="font-medium text-lg mt-6">Female:</h1>
          <table className="w-fit border-collapse border border-gray-300 mb-4">
            <thead>
              <tr className={tableHeaderBgColor}>
                <th className={tableCellStyle}>EU Size</th>
                <th className={tableCellStyle}>UK Size</th>
                <th className={tableCellStyle}>Foot Length (cm)</th>
              </tr>
            </thead>
            <tbody>
              <tr className={evenRowBgColor}>
                <td className={tableCellStyle}>36</td>
                <td className={tableCellStyle}>3</td>
                <td className={tableCellStyle}>22.2</td>
              </tr>
              <tr className={oddRowBgColor}>
                <td className={tableCellStyle}>37</td>
                <td className={tableCellStyle}>4</td>
                <td className={tableCellStyle}>22.9</td>
              </tr>
              <tr className={evenRowBgColor}>
                <td className={tableCellStyle}>38</td>
                <td className={tableCellStyle}>5</td>
                <td className={tableCellStyle}>23.5</td>
              </tr>
              <tr className={oddRowBgColor}>
                <td className={tableCellStyle}>39</td>
                <td className={tableCellStyle}>6</td>
                <td className={tableCellStyle}>24.1</td>
              </tr>
              {/* ... */}
            </tbody>
          </table>
        </>
      );
    }
  
    function renderTopSizeTable() {
      return (
        <>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className={tableHeaderBgColor}>
                <th className={tableCellStyle}>Size</th>
                <th className={tableCellStyle}>Chest (in)</th>
                <th className={tableCellStyle}>Waist (in)</th>
                <th className={tableCellStyle}>Sleeve (in)</th>
              </tr>
            </thead>
            <tbody>
              <tr className={evenRowBgColor}>
                <td className={tableCellStyle}>S</td>
                <td className={tableCellStyle}>34-36</td>
                <td className={tableCellStyle}>28-30</td>
                <td className={tableCellStyle}>33.5</td>
              </tr>
              <tr className={oddRowBgColor}>
                <td className={tableCellStyle}>M</td>
                <td className={tableCellStyle}>38-40</td>
                <td className={tableCellStyle}>32-34</td>
                <td className={tableCellStyle}>34</td>
              </tr>
              <tr className={evenRowBgColor}>
                <td className={tableCellStyle}>L</td>
                <td className={tableCellStyle}>42-44</td>
                <td className={tableCellStyle}>36-38</td>
                <td className={tableCellStyle}>35.5</td>
              </tr>
              <tr className={oddRowBgColor}>
                <td className={tableCellStyle}>XL</td>
                <td className={tableCellStyle}>46-48</td>
                <td className={tableCellStyle}>40-42</td>
                <td className={tableCellStyle}>36</td>
              </tr>
              {/* ... */}
            </tbody>
          </table>
  
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className={tableHeaderBgColor}>
                <th className={tableCellStyle}>Size</th>
                <th className={tableCellStyle}>Bust (in)</th>
                <th className={tableCellStyle}>Waist (in)</th>
                <th className={tableCellStyle}>Hips (in)</th>
              </tr>
            </thead>
            <tbody>
              <tr className={evenRowBgColor}>
                <td className={tableCellStyle}>XS</td>
                <td className={tableCellStyle}>30-32</td>
                <td className={tableCellStyle}>23-25</td>
                <td className={tableCellStyle}>33-35</td>
              </tr>
              <tr className={oddRowBgColor}>
                <td className={tableCellStyle}>S</td>
                <td className={tableCellStyle}>32-34</td>
                <td className={tableCellStyle}>25-27</td>
                <td className={tableCellStyle}>35-37</td>
              </tr>
              <tr className={evenRowBgColor}>
                <td className={tableCellStyle}>M</td>
                <td className={tableCellStyle}>34-36</td>
                <td className={tableCellStyle}>27-29</td>
                <td className={tableCellStyle}>37-39</td>
              </tr>
              <tr className={oddRowBgColor}>
                <td className={tableCellStyle}>L</td>
                <td className={tableCellStyle}>36-38</td>
                <td className={tableCellStyle}>29-31</td>
                <td className={tableCellStyle}>39-41</td>
              </tr>
              {/* ... */}
            </tbody>
          </table>
        </>
      );
    }
  
    function renderBottomSizeTable () {
      return (
        <>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className={tableHeaderBgColor}>
                <th className={tableCellStyle}>Size</th>
                <th className={tableCellStyle}>Waist (in)</th>
                <th className={tableCellStyle}>Inseam (in)</th>
              </tr>
            </thead>
            <tbody>
              <tr className={evenRowBgColor}>
                <td className={tableCellStyle}>S</td>
                <td className={tableCellStyle}>28-30</td>
                <td className={tableCellStyle}>30</td>
              </tr>
              <tr className={oddRowBgColor}>
                <td className={tableCellStyle}>M</td>
                <td className={tableCellStyle}>32-34</td>
                <td className={tableCellStyle}>32</td>
              </tr>
              <tr className={evenRowBgColor}>
                <td className={tableCellStyle}>L</td>
                <td className={tableCellStyle}>36-38</td>
                <td className={tableCellStyle}>34</td>
              </tr>
              <tr className={oddRowBgColor}>
                <td className={tableCellStyle}>XL</td>
                <td className={tableCellStyle}>40-42</td>
                <td className={tableCellStyle}>36</td>
              </tr>
              {/* ... */}
            </tbody>
          </table>
  
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className={tableHeaderBgColor}>
                <th className={tableCellStyle}>Size</th>
                <th className={tableCellStyle}>Waist (in)</th>
                <th className={tableCellStyle}>Hip (in)</th>
                <th className={tableCellStyle}>Inseam (in)</th>
              </tr>
            </thead>
            <tbody>
              <tr className={evenRowBgColor}>
                <td className={tableCellStyle}>XS</td>
                <td className={tableCellStyle}>23-25</td>
                <td className={tableCellStyle}>33-35</td>
                <td className={tableCellStyle}>29</td>
              </tr>
              <tr className={oddRowBgColor}>
                <td className={tableCellStyle}>S</td>
                <td className={tableCellStyle}>25-27</td>
                <td className={tableCellStyle}>35-37</td>
                <td className={tableCellStyle}>30</td>
              </tr>
              <tr className={evenRowBgColor}>
                <td className={tableCellStyle}>M</td>
                <td className={tableCellStyle}>27-29</td>
                <td className={tableCellStyle}>37-39</td>
                <td className={tableCellStyle}>31</td>
              </tr>
              <tr className={oddRowBgColor}>
                <td className={tableCellStyle}>L</td>
                <td className={tableCellStyle}>29-31</td>
                <td className={tableCellStyle}>39-41</td>
                <td className={tableCellStyle}>32</td>
              </tr>
              {/*... */}
            </tbody>
          </table>
        </>
      );
    }
  
    return tableContent;
  }
  