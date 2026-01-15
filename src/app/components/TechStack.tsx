export default function TechStack() {
  const technologies = [
    {
      name: 'React',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBs3ut4X92OKGgpqt5F-_ruXL_guouTSA03kZirpnfKwC6fiYZRtalOHbZHF7LwSKrXKegBhSjQrYgWvZfpb2vrV5R_HaZ6OIW0gX4GbHmtHjPkFdyPWHIOqfhTLiJAXwyLsYMnjALKskyZw0IMaHHlcGmmbsKYHxVDgWCK8aEd-20MTrdERe52YPlie9xUP9XbbQRbFKOu62FRnJ00bXBd8Ja80vSXCYC0NJVJ3SN8n3NRUteEp07miuZpbbrV1l_P-U-iVRXLuPpz',
      bg: 'bg-pastel-blue dark:bg-blue-900/20',
      border: 'border-blue-100 dark:border-blue-800/30',
    },
    {
      name: 'TypeScript',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD34ZRCb2WtS98qNlWQpOo7Qf1BShFLyJyumiT4EdCtJvi-f3-7knMRs7UnUNBanVtA_3NE-uZ65ak0WZlrpuUiyTJbBi9Sb0aUmyvtdFefczwpfXT9NOT0l5cYZ4RPy5byieXK2yteZUxVjadOM1kIi3BDDpRFB6RbeJrBUPwcFq71GG9GT3OCeAj9DBgCrF3_Ha9jaRWNSIzQJbeIlt9gTYzSaTDCK6cZxs6DEBlZNhO4Xt-p5CsiLbYy-PElmDu4ZWWx8IQb_mW1',
      bg: 'bg-indigo-50 dark:bg-indigo-900/20',
      border: 'border-indigo-100 dark:border-indigo-800/30',
    },
    {
      name: 'Tailwind',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjnVnKwYR1PsWzeOVv3l0Vma4WeM6Xa2Lo2H7erh7ezmwkcTtlfW25JOP35k7LdAr9-WZZrfV_MFi69-ALxj7bGBQ8iIyYesiStpOpnfssjZ21Pjx5j1mbn_4KFfDbjXi_bCCtiMfUtM6H7g906YiBOK687XhNZFfcKFKV2n6TxbvQdg6T_C-fX4vmeh97wEiwR4Op-kumXpQxaa_cozEvKdDPcexT72Ej8lbABw7dUrDHYlW9WNt0XTHwGjI0cNxZ-rkR2a6xjpRb',
      bg: 'bg-teal-50 dark:bg-teal-900/20',
      border: 'border-teal-100 dark:border-teal-800/30',
    },
    {
      name: 'HTML5',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBq6T13ADLBHcnACDyyx1W2RV6NlX1s3-0MgVJeZNB6k0EbTIJ9vSVJXFIIScGsgtXNok98DPxmSM2TixkzuAs8rlW8PD3Kcm-Aaxr1M6RxzCfsBsmt5C6fY3moWy_HfYBIsq3BA9L15F1Qsz0E6HBktzE4Boib7rM3KvRMrS0igPEAQdyTStRcUW8tGXOO__KBx1ZARM8q_Di-cLm0DPdxEPhCFrL4TkVCxwk0zNZE5kuaDn6VRG0mBC83cv9nGVGHgoolnsBRVOd',
      bg: 'bg-orange-50 dark:bg-orange-900/20',
      border: 'border-orange-100 dark:border-orange-800/30',
    },
    {
      name: 'Figma',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6SKNmXI1MijPkOD28jTHk9LCDWuY6afbzuSedncfz558wHwZ4FvuFl5w0NWiWMdPOdNOFu3uGHYvfHRLUx8Vq4_SNHwlRd4mSA_ZpU6hw2nlkAm-5jOCTuVojKdKXlwC2V7k1OM7Xvj7T-v-Jq9NB_pZhgC-erL4swEVybxMkf3X0mRXshwMH2w6kpxvw1NKRvnDYXXSscYY8vXbxThpphB1jgOmWhMjLDfPVlsXopVj6wU7mf81EAzL3piP_w_zfCi-A8sYcwuIf',
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      border: 'border-purple-100 dark:border-purple-800/30',
    },
    {
      name: 'JavaScript',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJzaOKVJWst8qv5qfiDNs1wwugGl_YjPAN28k_U65CisCvt3OvWEfuYqplL4SIevpPGOLzLmkec2zVFFgooc5oCxlHACEnff2hbyv9qT2ZamGGxHGHGwOdkc4WS-wGWu8znqeKSMKfRbU-uTVyhk9xD-t-uyMGyWPEs2maR5U0BEKhyLTvg5TaA3YkvlxtZLQjzHfpXwthsBiPWeqR16VgEe2PwHVHarSuS6OzKoPBdUuxhxz6ehKKjiY_rcyNgZj1Kfl0KMR9D3My',
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-100 dark:border-yellow-800/30',
    },
    {
      name: 'Node.js',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_DkGP9UwDtFi0Z8w7zuRZ5omDs-QQfGEkRMh-ffz-KOafFCmIMgjO-3f-V9Ou-EcQPP1SNZMLvM3L5kZ1GN6GRRKz9mcUEP0SJEHiDEjik6oZeWb8YOZUdIDBlO9ZP_H0wyxaeEkIrDjD6TqS_0m6JXGPyTS2_m8qLuIVy9isXcqTvJOKj6AfH_9ORM_vqORgYEBDfroONPpxlyJlCAj1iDPAka1g6wXfgdJgcf9G_E94-9ZJmbjw1qssfPI96tnhBkBOeYDP6_WI',
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-100 dark:border-green-800/30',
    },
    {
      name: 'Sass',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvOLeg99wC8Zhr1ecjmlsldMMWV6s1i6H467vj_3cU6N8zrMBXltH3BPfKWliWaOU3HtyYlcjXoBK9PA-zL7YwAUKJl6Kp0FYnucDbz28dwTQie6tb1Wc7FIZoJJCUcZAuC1loYJSTX0xfNh05f34Od_GfqTIwLe-15VddmJfUIbSlaHu4o6Zhafe57-kC9eUyUXo-CMSBLfs-cNWDJfN1Tq7TGfhJ1pVKchBN3fm5fDzmwfutm8AhtTYaSgw5V2Jl-V3ze0N0DxoY',
      bg: 'bg-pink-50 dark:bg-pink-900/20',
      border: 'border-pink-100 dark:border-pink-800/30',
    },
  ];

  return (
    <section className="py-32 px-6 lg:px-12 bg-pastel-purple dark:bg-[#1a1625] overflow-hidden relative" id="toolbox">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Tech Toolbox
          </h2>
          <p className="font-body text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The modern technologies and tools I use to build premium, high-performance web experiences.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className={`group flex flex-col items-center justify-center p-8 rounded-[2rem] ${tech.bg} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border ${tech.border}`}
            >
              <div className="w-16 h-16 bg-white dark:bg-blue-900/50 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <img
                  alt={tech.name}
                  className="w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity"
                  src={tech.src}
                />
              </div>
              <h3 className="font-display font-bold text-xl text-gray-800 dark:text-gray-200">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}