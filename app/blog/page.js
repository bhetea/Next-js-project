import { lusitana, poetsenOne } from "@/app/ui/fonts";
import styles from "@/app/style.module.css";

export default function Blog() {
  return (
    <div className={`container-fluid mt-5 px-5 py-5 fs-2 ${styles.bgcolors}`}>
      <h1 className={`text-center px-3 py-3 fw-bold ${poetsenOne.className}`}>
        Blog
      </h1>

      <p className={`px-3 py-3 ${lusitana.className}`}>
        Every skilled developer you look up to once stared at a blank screen,
        confused and unsure. They didn’t begin with genius or secret
        knowledge—they began with curiosity, persistence, and a willingness to
        fail forward. Behind their expertise are hours of frustration, late
        nights debugging, and countless “aha” moments earned through trial and
        error. They kept showing up, learning a little more each day. So don’t
        let where you are discourage you. The journey from beginner to expert is
        walked one line of code at a time. You’re just getting started—and
        that’s powerful.
      </p>

      <h2 className={`text-center px-3 py-3 fw-bold ${poetsenOne.className}`}>
        Every Developer You Admire Started With Nothing
      </h2>

      <p className={lusitana.className}>
        Most people wait to feel “good enough” before taking action—but that’s
        not how breakthroughs happen. The developers who rise don’t wait for
        permission or perfection. They show up when they’re uncertain, take
        steps while still learning, and build even when they doubt themselves.
        Growth doesn’t follow confidence—it builds it. The real magic happens
        when you commit before you're fully prepared. Every skill sharpened,
        every challenge faced, began with someone who dared to start despite
        fear. If you keep showing up, ready or not, your breakthrough will come.
        Don’t wait—begin now, just as you are.
      </p>
    </div>
  );
}
