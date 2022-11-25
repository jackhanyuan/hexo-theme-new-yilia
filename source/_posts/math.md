---
title: math
tag:
  - math
categories:
  - math
article_type: 1
no_word_count: false
no_toc: false
no_date: false
no_declare: false
no_reward: false
no_comments: false
no_share: false
no_footer: false
mathjax: true
top:
---

如 $\lim_{x \to 0} \frac{\sin x}{x}$ 渲染的是

$$
\begin{eqnarray}
 \lim_{x \to 0} \frac{\sin x + x^2 + x^3}{x} & = & \lim_{x \to 0} \frac{\sin x }{x} + \lim_{x \to 0} \frac{x^2 }{x} + \lim_{x \to 0}\frac{x^3}{x} 
\\\\ & = & \lim_{x \to 0}\frac{\sin x}{x} 
\\\\ & = & 1
\end{eqnarray}
$$

<!-- more -->

斐波那契数列$A_n=A_{n-1}+A_{n-2}$,前后两项的比值逐渐收敛到黄金分割比例
$$\lim_{n\to \infty}\frac{A_{n-1}}{A_n}=\frac{\sqrt{5}-1}{2}.$$

因式分解
$$\begin{split}(x−1)(x−3)&=x^2−4x+3 \\ 
&=x^2−4x+4−1 \\ 
&=(x−2)^2−1
\end{split}
$$

狄利克雷函数

$$
D(x)=
\begin{cases}
1,& x \in Q \\
0,& x \notin Q
\end{cases}
$$

高斯公式
$$
\iiint_{\Omega}\left(\frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z}\right) d v=\iint_{\Sigma} P d y d z+Q d z d x+R d x d y
$$

## 物理公式
- 牛顿第一定律: $\sum \vec{F}_{i}=\frac{\mathrm{d} \vec{v}}{\mathrm{d} t}=0$
- 牛顿第二定律: $\vec{F}=\frac{\mathrm{d} m}{\mathrm{d} t} \vec{v}+m \frac{\mathrm{d} \vec{v}}{\mathrm{d} t}=\frac{\mathrm{d} m}{\mathrm{d} t} \vec{v}+m \vec{a}=\frac{\mathrm{d} m}{\mathrm{d} t} \vec{v}+m \frac{\mathrm{d}^{2} \vec{r}}{\mathrm{d} t^{2}}$
- 牛顿第三定律: $\overrightarrow{F_{12}}=-\overrightarrow{F_{21}}$
- 质能守恒: $E=mc^2$

## 化学公式
离子反应与沉淀: $\ce{SO4^2- + Ba^2+ -> BaSO4 v}$
    
## 生物公式
光合作用
范德蒙行列式
$$D_{n-1}=\left|\begin{array}{cccc}
1 & 1 & \dots & 1 \\
x_{2} & x_{3} & \dots & x_{n} \\
\vdots & \vdots & & \vdots \\
x_{2}^{n-2} & x_{3}^{n-2} & \dots & x_{n}^{n-2}
\end{array}\right|=\prod_{2 \leq j<i \leq n}\left(x_{i}-x_{j}\right)$$